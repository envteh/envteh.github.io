export function textMessage(paket: string) {
  const adminName = "EnvTeh";
  const phoneNumber = "62895363616395";
  const message = `Halo kak ${adminName}\n\nSaya izin menanyakan lebih jauh tentang paket ${paket}`;
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return waLink;
}
