import { useContext } from "react";

import styled from "styled-components";
import StatusStateContext from "../../store/status-state-context";

const Pre = styled.pre`
  text-align: left;
  font-weight: bold;
`;

const SamplePostBody = (props) => {
  const ssCtx = useContext(StatusStateContext);

  return (
    <div>
      <h2>Sample JSON POST Body:</h2>
      <Pre>
        {JSON.stringify(
          { ...props.webData, status_state: ssCtx.value },
          false,
          4
        )}
      </Pre>
    </div>
  );
};
export default SamplePostBody;
