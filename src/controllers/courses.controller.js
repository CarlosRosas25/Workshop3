import { coursesService } from "../services/repository/services.js";

export const getCourses = async (request, response) => {
  try {
    let courses = await coursesService.getAll();
    response.send(courses);
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .send({ error: error, message: "No se pudo obtener los cursos." });
  }
};

export const saveCourse = async (request, response) => {
  try {
    let result = await coursesService.saveCourse(request.body);
    response.status(201).send(result);
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .send({ error: error, message: "No se pudo guardar el curso." });
  }
};
