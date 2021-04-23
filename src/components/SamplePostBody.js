const SamplePostBody = (props) => {
  return (
    <div>
      <h2>Sample JSON POST Body:</h2>
      <pre>
        {JSON.stringify(
          { ...props.webData, status_state: props.statusState },
          false,
          4
        )}
      </pre>
    </div>
  );
};
export default SamplePostBody;
