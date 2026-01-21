

export interface LoadingVariantProps {
    onComplete?: () => void;
    className?: string;
}

export interface VariantDefinition {
    id: string;
    name: string;
    description: string;
    component: React.FC<LoadingVariantProps>;
}
