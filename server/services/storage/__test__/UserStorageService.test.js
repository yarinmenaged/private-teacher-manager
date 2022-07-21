const UserStorageService = require("../UserStorageService");
const { Sequelize, Student, UserInfo, Teacher, sequelize } = require('../../../db/models');

describe('Testing User Storage Service', () => {
    let mockedSequelize;
    beforeEach(async () => {
        mockedSequelize = new Sequelize({
            database: 'private_teachers',
            username: 'root',
            password: 'password',
            host: "127.0.0.1",
            dialect: "mysql",
            validateOnly: true,
            models: [__dirname + '/models'],
        });
        await mockedSequelize.sync({ force: true });
    })

    afterEach(async () => {
        jest.clearAllMocks();
        await sequelize.truncate({ cascade: true })
        await mockedSequelize.close();
    })

    test('Register student', async () => {
        jest.spyOn(Student, 'create');
        jest.spyOn(UserInfo, 'create');

        const mock_user = {
            name: "Test Testing",
            email: "test@testing.com",
            phone: "0543133544",
            password: "8bb6118f8fd6935ad0876a3be34a717d32708ffd"
        }
        const [user_info, student] = await UserStorageService.AddNewStudent(mock_user);

        expect(UserInfo.create).toHaveBeenCalledTimes(1);
        expect(Student.create).toHaveBeenCalledTimes(1);
        expect(user_info.Email).toEqual('test@testing.com');
        expect(student.User_info_id).toEqual(user_info.id);
    });

    test('Register teacher', async () => {
        jest.spyOn(Teacher, 'create');
        jest.spyOn(UserInfo, 'create');

        const mock_user = {
            Name: "Test Teacher",
            Email: "test@testing.com",
            Phone: "0543133544",
            Password: "8bb6118f8fd6935ad0876a3be34a717d32708ffd"
        }
        const [user_info, student] = await UserStorageService.AddNewStudent(mock_user);

        expect(UserInfo.create).toHaveBeenCalledTimes(1);
        expect(Student.create).toHaveBeenCalledTimes(1);
        expect(user_info.Name).toEqual("Test Teacher");
        expect(student.User_info_id).toEqual(user_info.id);
    });
});
