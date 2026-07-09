type ContactButtonProps = {
  onClick?: () => void;
};

export default function ContactButton({
  onClick,
}: ContactButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-md bg-primary px-5 py-4 font-bold text-white transition hover:bg-quinary hover:text-black "
      aria-label="Contact Me"
    >
      Contactez-moi
    </button>
  );
}