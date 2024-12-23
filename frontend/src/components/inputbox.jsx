export default function InputBox({ label }) {
  return (
    <div>
      <div>{label}</div>
      <input type="text" placeholder="e.g John doe" />
    </div>
  );
}
