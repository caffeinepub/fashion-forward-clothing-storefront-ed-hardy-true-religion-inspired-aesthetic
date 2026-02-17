export function TextureBackground() {
  return (
    <div
      className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: 'url(/assets/generated/grunge-texture-tile.dim_1024x1024.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: '512px 512px',
      }}
    />
  );
}
