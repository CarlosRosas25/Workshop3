import { studentService } from "../services/repository/services.js";

export const getStudents = async (request, response) => {
  try {
    let students = await studentService.getAll();
    response.send(students);
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .send({ error: error, message: "No se pudo obtener los estudiantes." });
  }
};

export const createStudent = async (request, response) => {
  try {
    let result = await studentService.createStudent(request.body);
    response.status(201).send(result);
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .send({ error: error, message: "No se pudo guardar el estudiante." });
  }
};
