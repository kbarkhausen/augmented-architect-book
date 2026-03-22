// AI doesn't track state across async operations
const [data, setData] = useState([]);

async function loadData() {
  const result = await fetch('/api/data');
  data.push(result);  // Mutating state directly!
  setData(data);      // Same reference, won't re-render
}