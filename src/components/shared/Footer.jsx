export default function Footer() {
    return (
        <footer className="border-t border-black/10 bg-white/60">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="font-medium">Zentexx Studio</p>
                    <p className="text-black/60">Designing clear interfaces with purpose.</p>
                </div>
                <div className="flex items-center gap-4 text-black/60">
                    <span>Builds • May 2026</span>
                    <span className="hidden sm:inline">•</span>
                    <span>hello@zentexx.com</span>
                </div>
            </div>
        </footer>
    );
}
