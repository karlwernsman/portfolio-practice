import { Stack } from 'react-bootstrap';

function Projects() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="bg-light border">Pictionary</div>
      <div className="bg-light border">Error Affirmations</div>
      <div className="bg-light border">Swimmy Nudibranch</div>
    </Stack>
  );
}

export default Projects;
