import { useEffect, useState } from "react";

function App() {
  const [currentActivity, setActivity] = useState([]);
  const url = "http://www.boredapi.com/api/activity/";

  async function getActivity() {
    const response = await fetch(url);
    const data = await response.json();

    setActivity(data.activity);
  }

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <div>
      <h4>Testing Api calls v0.1</h4>
      <h3>Suggested activity: {currentActivity}</h3>
    </div>
  );
}

export default App;
