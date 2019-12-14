import * as Yup from 'yup';
import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const plans = await Plan.findAll();

    return res.status(200).json(plans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number()
        .min(1)
        .max(12)
        .required(),
      price: Yup.number()
        .positive()
        .required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const plan = await Plan.create(req.body);

    return res.status(200).json(plan);
  }

  async update(req, res) {
    const plan = await Plan.findOne({ where: { id: req.params.id } });

    if (!plan) {
      return res.status(400).json({ error: 'plan does not exist' });
    }

    await plan.update(req.body);

    return res.status(200).json(plan);
  }

  async delete(req, res) {
    const plan = await Plan.destroy({ where: { id: req.params.id } });

    if (!plan) return res.status(400).json({ error: 'plan does not exist' });

    return res.status(200).json({ message: 'plan was removed successfully' });
  }
}

export default new PlanController();
