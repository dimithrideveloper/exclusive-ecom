// Style imports
import "./EmployeeCard.css";

export default function EmployeeCard({ employee }) {
  return (
    <div className="carousel_card">
      <img src={employee.imgUrl} alt="employee" className="carousel_img" />
      <h3 className="employee_name">{employee.name}</h3>
      <p className="employee_designation">{employee.designation}</p>
      <div className="employee_socials">
        <img src={employee.x} alt="X / Twitter" className="socals_icon" />
        <img src={employee.instagram} alt="Instagram" className="socals_icon" />
        <img src={employee.facebook} alt="Facebook" className="socals_icon" />
      </div>
    </div>
  );
}
