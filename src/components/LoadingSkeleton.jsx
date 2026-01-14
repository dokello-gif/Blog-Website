import React from 'react';

const Skeleton = ({ className }) => (
    <div className={`animate-pulse bg-charcoal/5 rounded-2xl ${className}`}></div>
);

export const CardSkeleton = () => (
    <div className="bg-white p-6 rounded-3xl border border-charcoal/5 h-full flex flex-col">
        <Skeleton className="h-6 w-1/4 mb-4" />
        <Skeleton className="h-8 w-3/4 mb-4" />
        <div className="space-y-2 mb-8 flex-grow">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-charcoal/5">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
        </div>
    </div>
);

export const ArticleSkeleton = () => (
    <div className="container mx-auto max-w-[700px] pt-12">
        <Skeleton className="h-6 w-32 mb-8" />
        <Skeleton className="h-6 w-20 mb-6" />
        <Skeleton className="h-16 w-full mb-8" />
        <div className="flex gap-6 mb-12 pb-8 border-b border-charcoal/5">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
        </div>
        <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-10/12" />
        </div>
    </div>
);

export default Skeleton;
