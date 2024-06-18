"use client";

import { AnimationProps, TargetAndTransition, VariantLabels, motion } from 'framer-motion';
interface Props {
    children: React.ReactNode;
    initial: AnimationProps['initial'];
    whileInView: TargetAndTransition | VariantLabels | undefined;
}

export const Reveal = ({ children, initial, whileInView }: Props) => {
    return (
        <motion.div
            initial={initial}
            whileInView={whileInView}
        > {children}</ motion.div>
    );
};