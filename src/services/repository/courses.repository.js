export default class CoursesRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getAll = () => {
    return this.dao.getAll();
  };

  saveCourse = (course) => {
    return this.dao.saveCourse(course);
  };
}
