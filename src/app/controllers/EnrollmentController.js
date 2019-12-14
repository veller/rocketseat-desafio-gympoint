import { addMonths, parseISO } from 'date-fns';

import Enrollment from '../models/Enrollment';
import Student from '../models/Student';
import Plan from '../models/Plan';

class EnrollmentController {
  async index(req, res) {
    const enrollments = await Enrollment.findAll();

    return res.status(200).json(enrollments);
  }

  async store(req, res) {
    const studentExists = await Student.findOne({
      where: { id: req.body.student_id }
    });

    if (!studentExists) {
      return res.status(400).json({ error: 'student does not exists' });
    }

    const plan = await Plan.findOne({
      where: { id: req.body.plan_id }
    });

    if (!plan) {
      return res.status(400).json({ error: 'plan does not exists' });
    }

    // calcula a data fim da matrícula baseado no plano
    // informado no front end
    const endDate = addMonths(parseISO(req.body.start_date), plan.duration);

    // calcula o valor total a ser pago
    const price = plan.duration * plan.price;

    // cria a matrícula
    const enrollment = await Enrollment.create({
      student_id: req.body.student_id,
      plan_id: req.body.plan_id,
      start_date: req.body.start_date,
      end_date: endDate,
      price
    });

    return res.status(200).json(enrollment);
  }

  async update(req, res) {
    return res.status(200).json({ ok: true });
    const endDate = addMonths(parseISO(req.body.start_date), plan.duration);

    // calcula o valor total a ser pago
    const price = plan.duration * plan.price;

    // cria a matrícula
    const enrollment = await Enrollment.create({
      student_id: req.body.student_id,
      plan_id: req.body.plan_id,
      start_date: req.body.start_date,
      end_date: endDate,
      price
    });

    return res.status(200).json(enrollment);
  }

  async update(req, res) {
    return res.status(200).json({ ok: true });
    const endDate = addMonths(parseISO(req.body.start_date), plan.duration);

    // calcula o valor total a ser pago
    const price = plan.duration * plan.price;

    // cria a matrícula
    const enrollment = await Enrollment.create({
      student_id: req.body.student_id,
      plan_id: req.body.plan_id,
      start_date: req.body.start_date,
      end_date: endDate,
      price
    });

    return res.status(200).json(enrollment);
  }

  async update(req, res) {
    return res.status(200).json({ ok: true });
    const endDate = addMonths(parseISO(req.body.start_date), plan.duration);

    // calcula o valor total a ser pago
    const price = plan.duration * plan.price;

    // cria a matrícula
    const enrollment = await Enrollment.create({
      student_id: req.body.student_id,
      plan_id: req.body.plan_id,
      start_date: req.body.start_date,
      end_date: endDate,
      price
    });

    return res.status(200).json(enrollment);
  }

  async update(req, res) {
    return res.status(200).json({ ok: true });
    const endDate = addMonths(parseISO(req.body.start_date), plan.duration);

    // calcula o valor total a ser pago
    const price = plan.duration * plan.price;

    // cria a matrícula
    const enrollment = await Enrollment.create({
      student_id: req.body.student_id,
      plan_id: req.body.plan_id,
      start_date: req.body.start_date,
      end_date: endDate,
      price
    });

    return res.status(200).json(enrollment);
  }

  async update(req, res) {
    return res.status(200).json({ ok: true });
    const endDate = addMonths(parseISO(req.body.start_date), plan.duration);

    // calcula o valor total a ser pago
    const price = plan.duration * plan.price;

    // cria a matrícula
    const enrollment = await Enrollment.create({
      student_id: req.body.student_id,
      plan_id: req.body.plan_id,
      start_date: req.body.start_date,
      end_date: endDate,
      price
    });

    return res.status(200).json(enrollment);
  }

  async update(req, res) {
    return res.status(200).json({ ok: true });
    const endDate = addMonths(parseISO(req.body.start_date), plan.duration);

    // calcula o valor total a ser pago
    const price = plan.duration * plan.price;

    // cria a matrícula
    const enrollment = await Enrollment.create({
      student_id: req.body.student_id,
      plan_id: req.body.plan_id,
      start_date: req.body.start_date,
      end_date: endDate,
      price
    });

    return res.status(200).json(enrollment);
  }

  async update(req, res) {
    return res.status(200).json({ ok: true });
  }

  async delete(req, res) {
    const enrollment = await Enrollment.destroy({
      where: { id: req.params.id }
    });

    if (!enrollment)
      return res.status(400).json({ error: 'enrollment does not exist' });

    return res
      .status(200)
      .json({ message: 'enrollment was removed successfully' });
  }
}

export default new EnrollmentController();
