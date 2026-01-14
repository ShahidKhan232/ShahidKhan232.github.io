export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="relative">
                {/* Animated logo or spinner */}
                <div className="w-20 h-20 border-4 border-blue-200 dark:border-blue-900 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>

                {/* Pulsing background */}
                <div className="absolute inset-0 w-20 h-20 bg-blue-400/20 dark:bg-blue-600/20 rounded-full animate-pulse"></div>
            </div>
        </div>
    );
}
