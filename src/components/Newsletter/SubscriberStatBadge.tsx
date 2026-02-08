import { useTranslation } from '../../i18n';

interface SubscriberStatBadgeProps {
    count?: number;
    label: string;
    withPlusOne?: boolean;
    className?: string;
}

const SubscriberStatBadge: React.FC<SubscriberStatBadgeProps> = ({
    count = 0,
    label,
    withPlusOne = false,
    className = ""
}) => {
    const { t } = useTranslation();

    // Vanity Threshold Logic
    const showCount = count >= 100;
    const displayCount = new Intl.NumberFormat('en-US').format(count);

    return (
        <div className={`flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg ${className}`}>
            <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10" />
                ))}
                {withPlusOne && (
                    <motion.div
                        initial={{ scale: 0, width: 0, opacity: 0 }}
                        animate={{ scale: 1, width: 24, opacity: 1 }}
                        transition={{ delay: 1.5, type: "spring" }}
                        className="w-6 h-6 rounded-full bg-white text-black border border-white flex items-center justify-center text-[10px] font-bold ml-[-8px] relative z-10"
                    >
                        +1
                    </motion.div>
                )}
            </div>
            <span className="text-sm font-light whitespace-nowrap text-white/90">
                {showCount ? (
                    <>
                        <span className="font-bold text-white">{displayCount}</span> {label}
                    </>
                ) : (
                    <span className="font-medium text-white">{t('outro.joinFoundingMembers')}</span>
                )}
            </span>
        </div>
    );
};

export default SubscriberStatBadge;
