import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {frameworkData.map((item) => (
                        <div 
                            key={item.id} 
                            className="group relative bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl rounded-3xl p-8 transform hover:-translate-y-2 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                        >
                            {/* Gradient border effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
                            
                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                                        <span className="text-white font-bold text-xl">F</span>
                                    </div>
                                    <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent">
                                        {item.name}
                                    </h2>
                                </div>
                                
                                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                                    {item.description}
                                </p>
                                
                                <div className="space-y-2 mb-8">
                                    <div className="flex items-center text-sm">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                        <span className="font-semibold text-gray-800">Developer:</span>
                                        <span className="ml-2 text-gray-600 font-medium">{item.details.developer}</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                        <span className="font-semibold text-gray-800">Released:</span>
                                        <span className="ml-2 text-gray-600 font-medium">{item.details.releaseYear}</span>
                                    </div>
                                </div>
                                
                                <a 
                                    href={item.details.officialWebsite} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 border border-transparent hover:border-blue-200/50 group/link"
                                >
                                    <span>Visit Website</span>
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}