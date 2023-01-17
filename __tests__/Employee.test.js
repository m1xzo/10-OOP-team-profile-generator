const Employee = require('../lib/Employee');

describe('Employee class', () => {

  // Test Employee initialization with constructor arguments
  describe('Initialization', () => {
    it('should instantiate Employee instance as an object', () => {
      expect(typeof(new Employee())).toBe("object");
    });

    it('should set "name" when created', () => {
      expect(new Employee('Grace').name).toBe('Grace');
    });

    it('should set "id" when created', () => {
      expect(new Employee('Grace', 3).id).toBe(3);
    });

    it('should set "email" when created', () => {
      expect(new Employee('Grace', 3, 'grace@test.com').email).toBe('grace@test.com');
    });
  });

  // Test Employee methods
  describe('getName method', () => {
    it('should return employee name', () => {
      expect(new Employee('Grace').getName()).toBe('Grace');
    });
  });

  describe('getId method', () => {
    it('should return employee ID', () => {
      expect(new Employee('Grace', 3).getId()).toBe(3);
    });
  });

  describe('getEmail method', () => {
    it('should return employee email', () => {
      expect(new Employee('Grace', 3, 'grace@test.com').getEmail()).toBe('grace@test.com');
    });
  });

  describe('getRole method', () => {
    it('should return employee role', () => {
      expect(new Employee('Grace', 3, 'grace@test.com').getRole()).toBe('Employee');
    });
  });
});

