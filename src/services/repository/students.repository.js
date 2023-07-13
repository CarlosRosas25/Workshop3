export default class StudentsRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getAll = () => {
    return this.dao.getAll();
  };

  createStudent = (student) => {
    return this.dao.save(student);
  };
}
