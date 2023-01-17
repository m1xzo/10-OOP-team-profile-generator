// const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

// jest.mock('inquirer');

describe('Engineer class', () => {

  // Test Engineer initialization with constructor arguments
  describe('Initialization', () => {
    it('should instantiate Engineer class as a child class of Employee', () => {
      expect((new Engineer()) instanceof Employee).toEqual(true);
    });

    it('should set "name" when created', () => {
      expect(new Engineer('Alec').name).toBe('Alec');
    });

    it('should set "id" when created', () => {
      expect(new Engineer('Alec', 2).id).toBe(2);
    });

    it('should set "email" when created', () => {
      expect(new Engineer('Alec', 2, 'alec@test.com').email).toBe('alec@test.com');
    });

    it('should set "github" when created', () => {
      expect(new Engineer('Alec', 2, 'alec@test.com', 'ibealec').github).toBe('ibealec');
    });
  });

  // Test Engineer methods
  describe('getName method', () => {
    it('should return employee name', () => {
      expect(new Engineer('Alec').getName()).toBe('Alec');
    });
  });

  describe('getId method', () => {
    it('should return employee ID', () => {
      expect(new Engineer('Alec', 2).getId()).toBe(2);
    });
  });

  describe('getEmail method', () => {
    it('should return employee email', () => {
      expect(new Engineer('Alec', 2, 'alec@test.com').getEmail()).toBe('alec@test.com');
    });
  });

  describe('getGithub method', () => {
    it('should return employee github username', () => {
      expect(new Engineer('Alec', 2, 'alec@test.com', 'ibealec').getGithub()).toBe('ibealec');
    });
  });

  describe('getRole method', () => {
    it('should return employee role as Engineer', () => {
      expect(new Engineer('Alec', 2, 'alec@test.com').getRole()).toBe('Engineer');
    });
  });
});
