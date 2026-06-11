type PageLoaderProps = {
  text?: string;
};

export default function PageLoader({
  text = "Memuat konten...",
}: PageLoaderProps) {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center gap-4 bg-pink-300 py-20">
      <div className="flex items-center gap-2">
        <span className="dot bg-brand-orange" />
        <span className="dot bg-brand-orange animation-delay-200" />
        <span className="dot bg-brand-orange animation-delay-400" />
      </div>
      {text && <p className="text-muted-foreground text-sm">{text}</p>}
    </div>
  );
}

export function PageLoaderSpinner() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="border-brand-orange h-10 w-10 animate-spin rounded-full border-4 border-t-transparent" />
    </div>
  );
}
