import type { Language } from '../i18n/types';

const KIT_API_KEY = import.meta.env.VITE_KIT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.convertkit.com/v4';

export interface SubscribeResult {
    success: boolean;
    message?: string;
}

/**
 * Returns the appropriate Kit Form ID based on user language.
 * @param language - User's current language ('fr' or 'en')
 * @returns Form ID string
 */
export const getFormIdByLanguage = (language: Language): string => {
    const formIdEn = import.meta.env.VITE_KIT_FORM_ID_EN;
    const formIdFr = import.meta.env.VITE_KIT_FORM_ID_FR;

    if (language === 'en' && formIdEn) {
        return formIdEn;
    }

    // Fallback to French if language is 'fr' or if English ID is missing
    return formIdFr || formIdEn || '';
};

/**
 * Subscribes an email to the Kit (ConvertKit) Form.
 * Uses V4 API with 2-step process for maximum reliability.
 * @param email - User's email address
 * @param formId - Kit Form ID to subscribe to
 */
export const subscribeToNewsletter = async (email: string, formId: string): Promise<SubscribeResult> => {
    // Validate configuration
    if (!KIT_API_KEY || !formId) {
        console.error('[Kit] Missing configuration. Please check VITE_KIT_PUBLIC_API_KEY and Form ID.');
        return {
            success: false,
            message: 'Configuration Error: Missing API Key or Form ID.'
        };
    }

    console.log('[Kit] ========== Starting subscription process ==========');
    console.log('[Kit] Email:', email);
    console.log('[Kit] Form ID:', formId);

    try {
        // STEP 1: Create subscriber (or get existing)
        const createUrl = `${BASE_URL}/subscribers`;
        console.log('[Kit] STEP 1: Creating/fetching subscriber');
        console.log('[Kit] URL:', createUrl);

        const createResponse = await fetch(createUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Kit-Api-Key': KIT_API_KEY,
            },
            body: JSON.stringify({
                email_address: email,
            }),
        });

        const createData = await createResponse.json();
        console.log('[Kit] STEP 1 Response:', {
            status: createResponse.status,
            statusText: createResponse.statusText,
            data: createData
        });

        // Handle subscriber creation (201 = created, 409 = already exists)
        if (!createResponse.ok && createResponse.status !== 409) {
            console.error('[Kit] ❌ STEP 1 FAILED - Could not create/fetch subscriber');
            return {
                success: false,
                message: createData.message || createData.error || 'Failed to create subscriber.'
            };
        }

        const subscriberId = createData.subscriber?.id;
        console.log('[Kit] ✅ STEP 1 SUCCESS - Subscriber ID:', subscriberId);

        if (!subscriberId) {
            console.error('[Kit] ❌ No subscriber ID in response');
            return {
                success: false,
                message: 'Failed to get subscriber information.'
            };
        }

        // STEP 2: Add subscriber to form
        const addUrl = `${BASE_URL}/forms/${formId}/subscribers`;
        console.log('[Kit] STEP 2: Adding subscriber to form');
        console.log('[Kit] URL:', addUrl);

        const addResponse = await fetch(addUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Kit-Api-Key': KIT_API_KEY,
            },
            body: JSON.stringify({
                email_address: email,
            }),
        });

        const addData = await addResponse.json();
        console.log('[Kit] STEP 2 Response:', {
            status: addResponse.status,
            statusText: addResponse.statusText,
            data: addData
        });

        // 200 = already added, 201 = newly added
        if (!addResponse.ok && addResponse.status !== 200) {
            console.error('[Kit] ❌ STEP 2 FAILED - Could not add to form');
            console.error('[Kit] Error details:', addData);
            return {
                success: false,
                message: addData.message || addData.error || 'Failed to add subscriber to form.'
            };
        }

        console.log('[Kit] ✅ STEP 2 SUCCESS - Subscriber added to form');
        console.log('[Kit] Final subscriber state:', addData.subscriber);
        console.log('[Kit] ========== Subscription complete ==========');

        return { success: true };

    } catch (error) {
        console.error('[Kit] ❌ Network Error:', error);
        return {
            success: false,
            message: 'Network error. Please check your connection.'
        };
    }
};
