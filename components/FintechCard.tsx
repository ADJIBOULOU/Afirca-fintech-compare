export default function FintechCard({ app }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-2">{app.name}</h2>
      <p className="text-sm mb-2"><strong>Countries:</strong> {app.countries.join(", ")}</p>
      <p className="text-sm mb-2"><strong>Fees:</strong> {app.fees}</p>
      <ul className="text-sm mb-4 list-disc ml-4">
        {app.features.map(f => (<li key={f}>{f}</li>))}
      </ul>
      <a href={app.link} target="_blank"
        className="block text-center bg-black text-white py-2 rounded-lg">
        Get App
      </a>
    </div>
  );
}