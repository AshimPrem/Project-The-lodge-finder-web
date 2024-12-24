export default function InputBox({ label, somePlaceholder , onChange }) {
  return (
    <div>
      <div>{label}</div>
      <input onChange={onChange} type="text" placeholder={somePlaceholder} />
    </div>
  );
}
