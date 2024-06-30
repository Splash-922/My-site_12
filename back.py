dbconfig = {'host': '127.0.0.1',
            'user': 'root',
            'password': 'zig.zag337',
            'database': 'project',
            'auth_plugin': 'mysql_native_password'}
conn = mysql.connector.connect(**dbconfig)
cursor = conn.cursor()







cursor.close()
conn.close()