import Student from "../models/Student";

class StudentController {
  async store(req, res) {
    console.log(req.body.email);

    const studentExists = await Student.findOne({
      where: { email: req.body.email }
    });

    if (studentExists) {
      return res.status(400).json({ error: "email already exists" });
    }

    const student = await Student.create(req.body);

    return res.json(student);
  }

  async update(req, res) {
    const { id } = req.body;
    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(400).json({ error: "Student not found" });
    }

    const { name, email, age, weight, height } = await student.update(req.body);

    return res.json({ name, email, age, weight, height });
  }
}

export default new StudentController();
