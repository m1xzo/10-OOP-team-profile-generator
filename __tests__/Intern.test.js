const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern class', () => {

  // Test Intern initialization with constructor arguments
  describe('Initialization', () => {
    it('should instantiate Intern class as a child class of Employee', () => {
      expect((new Intern()) instanceof Employee).toEqual(true);
    });

    it('should set "name" when created', () => {
      expect(new Intern('John').name).toBe('John');
    });

    it('should set "id" when created', () => {
      expect(new Intern('John', 5).id).toBe(5);
    });

    it('should set "email" when created', () => {
      expect(new Intern('John', 5, 'john@test.com').email).toBe('john@test.com');
    });

    it('should set "school" when created', () => {
      expect(new Intern('John', 5, 'john@test.com', '2University').school).toBe('2University');
    });
  });

  // Test Intern methods
  describe('getName method', () => {
    it('should return employee name', () => {
      expect(new Intern('John').getName()).toBe('John');
    });
  });

  describe('getId method', () => {
    it('should return employee ID', () => {
      expect(new Intern('John', 5).getId()).toBe(5);
    });
  });

  describe('getEmail method', () => {
    it('should return employee email', () => {
      expect(new Intern('John', 5, 'john@test.com').getEmail()).toBe('john@test.com');
    });
  });

  describe('getSchool method', () => {
    it('should return employee school', () => {
      expect(new Intern('John', 5, 'john@test.com', '2University').getSchool()).toBe('2University');
    });
  });

  describe('getRole method', () => {
    it('should return employee role as Intern', () => {
      expect(new Intern('John', 5, 'john@test.com').getRole()).toBe('Intern');
    });
  });
});
