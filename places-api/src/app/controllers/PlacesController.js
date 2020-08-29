import Places from '../schemas/Places';

import * as Yup from 'yup';

class PlacesController {


    async store(req, res) {

        const schema = Yup.object().shape({
            name: Yup.string(),
            lat: Yup.number()
                .required('Informe a latitude'),
            lng: Yup.number()
                .required('Informe a longitude'),
        });
        schema.validate(req.body).catch((err) => {
            return res.status(400).json({ erro: err.errors[0] });
        });

        const response = await Places.create(req.body);

        return res.json(response);
    }

    async update(req, res) {

        const { id } = req.params;

        const place = await Places.findById(id);
        if (!place) {
            return res.json({ erro: 'Registro não encontrado!' });
        }

        await place.updateOne(req.body);

        return res.json({ status: 'Atualizado' });
    }

    async delete(req, res) {

        const { id } = req.params;

        const place = await Places.findById(id);
        if (!place) {
            return res.json({ erro: 'Registro não encontrado!' });
        }

        await place.delete();

        return res.json({ status: 'deletado' });
    }

    async show(req, res) {

        const { id } = req.params;

        const place = await Places.findById(id);
        if (!place) {
            return res.json({ erro: 'Registro não encontrado!' });
        }

        return res.json(place);
    }

    async index(req, res) {
        const response = await Places.find();

        return res.json(response);
    }

}

export default new PlacesController();

