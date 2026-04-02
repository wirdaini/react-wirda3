export default function TailwinddCSS() {
    return (
        <div className="bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="border-b-4 border-indigo-500 inline-block m-4 text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        ✨ Belajar Tailwind CSS 4 ✨
                    </h1>
                </div>
                
                <div className="flex justify-center mb-8">
                    <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white
                                   px-6 py-3 mx-4 rounded-xl
                                   shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300
                                   font-semibold">
                        🚀 Click Me
                    </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Spacing/>
                    <Typography/>
                    <BorderRadius/>
                    <BackgroundColors/>
                    <div className="md:col-span-2">
                        <FlexboxGrid/>
                    </div>
                    <ShadowEffects/>
                </div>
            </div>
        </div>
    );
}

function Spacing() {
    return (
        <div className="bg-white shadow-xl p-6 m-0 rounded-2xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Card Title</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">Ini adalah contoh penggunaan padding dan margin di Tailwind.</p>
        </div>
    )
}

function Typography(){
    return (
        <div className="bg-white shadow-xl p-6 rounded-2xl border border-gray-100">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Tailwind Typography</h1>
            <p className="text-slate-600 text-base mt-3 leading-relaxed">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
        <div className="bg-white shadow-xl p-6 rounded-2xl border border-gray-100">
            <button className="border-2 border-indigo-500 text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-300 font-semibold"> ✨ Klik Saya ✨ </button>
        </div>
    )
}

function BackgroundColors(){
    return(
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold">🎨 Tailwind Colors</h3>
            <p className="mt-2 opacity-95">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between items-center bg-gradient-to-r from-slate-800 to-slate-900 p-5 rounded-2xl shadow-xl text-white">
            <h1 className="text-xl font-bold tracking-tight">✨ MyWebsite</h1>
            <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-indigo-300 transition-colors duration-200">🏠 Home</a></li>
                <li><a href="#" className="hover:text-indigo-300 transition-colors duration-200">📖 About</a></li>
                <li><a href="#" className="hover:text-indigo-300 transition-colors duration-200">📞 Contact</a></li>
            </ul>
        </nav>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-gray-100">
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">✨ Hover me!</h3>
            <p className="text-slate-600 mt-2">Lihat efek bayangan saat hover — makin premium!</p>
        </div>
    )
}