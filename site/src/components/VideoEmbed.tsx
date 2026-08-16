// Embed responsivo de vídeo do YouTube — usado na hero da Home e na página Sobre.
// Mantém proporção 16:9 em qualquer largura de tela (wrapper com padding-bottom).
interface VideoEmbedProps {
  youtubeId: string;
  title: string;
  className?: string;
}

export default function VideoEmbed({ youtubeId, title, className = '' }: VideoEmbedProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-earth-200 bg-earth-900 shadow-sm ${className}`}
      style={{ paddingBottom: '56.25%' /* 16:9 */ }}
    >
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
