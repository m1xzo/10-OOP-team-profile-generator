const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager class', () => {

  // Test Manager initialization with constructor arguments
  describe('Initialization', () => {
    it('should instantiate Manager class as a child class of Employee', () => {
      expect((new Manager()) instanceof Employee).toEqual(true);
    });

    it('should set "name" when created', () => {
      expect(new Manager('Jared').name).toBe('Jared');
    });

    it('should set "id" when created', () => {
      expect(new Manager('Jared', 1).id).toBe(1);
    });

    it('should set "email" when created', () => {
      expect(new Manager('Jared', 1, 'jared@test.com').email).toBe('jared@test.com');
    });

    it('should set "officeNumber" when created', () => {
      expect(new Manager('Jared', 1, 'jared@test.com', 1).officeNumber).toBe(1);
    });
  });

  // Test Manager methods
  describe('getName method', () => {
    it('should return employee name', () => {
      expect(new Manager('Jared').getName()).toBe('Jared');
    });
  });

  describe('getId method', () => {
    it('should return employee ID', () => {
      expect(new Manager('Jared', 1).getId()).toBe(1);
    });
  });

  describe('getEmail method', () => {
    it('should return employee email', () => {
      expect(new Manager('Jared', 1, 'jared@test.com').getEmail()).toBe('jared@test.com');
    });
  });

  describe('getRole method', () => {
    it('should return employee role as Manager', () => {
      expect(new Manager('Jared', 1, 'jared@test.com').getRole()).toBe('Manager');
    });
  });
});
