const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

test('Checking userList array', () => {
    expect(userList.includes('admin')).toBeTruthy;
    expect(userList[0]).toBe('Nick');
    expect(userList[userList.length-1]).toBe('new_user_2');
    expect(userList).toHaveLength(5);
    expect(typeof userList[2]).toBe('string');
    expect(userList[7]).toBeUndefined;
});