import Card from "./ui/Card";

const SamplePostBody = (props) => {
  const jsonBody = {
    ...props.webData,
    status_state: props.statusState
  }

  return <Card>
    <h2>Sample JSON POST Body:</h2>
    <pre>
      {JSON.stringify(jsonBody, false, 4)}
    </pre>
  </Card>;
};
export default SamplePostBody;
