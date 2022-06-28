// import { Card } from "react-bootstrap";

import ResourceCard from "../../components/ResourceCard/ResourceCard";

export default function Resources(props) {
  function generateResourceCards() {
    if (props.data) {
      return props.data.map((resource) => (
        <ResourceCard key={resource.resourceName} resourceData={resource} />
      ));
    }
    return "<h1>No Data</h1>";
  }

  return <>{generateResourceCards()}</>;
}
