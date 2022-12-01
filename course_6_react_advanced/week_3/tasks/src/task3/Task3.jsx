import "./task3.css";
import FeedbackForm from "./FeedbackForm";

function Task3() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="Task3">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Task3;
