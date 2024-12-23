export default function InputBox({ label, somePlaceholder }) {
  return (
    <div>
      <div>{label}</div>
      <input type="text" placeholder={somePlaceholder} />
    </div>
  );
}
