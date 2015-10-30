##mongodb��������
@(my_mongoDB)[mongoDB��װ����]

###��װmongodb
[��������](https://www.mongodb.org/?_ga=1.214696983.1685535600.1436681453)

###����mongodb

Ĭ��mongodb�ṩ�Ĳ���������`û�м���PATH��`�ģ���Ҫ�ֶ����
**`����`**
- **mongod** ���������ݿ�������ص�
- **mongo** �����ǲ������ݿ�Ŀͻ��� [���mongodb cmdʹ��](#)

###�������ݿ�
####1������Ĭ�����ã����� `���Ƽ�`
`����`
```
> mongod
/*
Ĭ�϶�ȡ/data/db ���ݿ��ļ� (windows��C:/data/db **Ĭ��û�н���**)
�ʣ���ʾ����
exception in initAndListen: 29 Data directory C:\data\db\ not
found., terminating,
��Ҫ�ֶ�������Ŀ¼
*/
```
####2��ָ���������ļ� ������ `�Ƽ�`
�ٷ�û���ṩ�ɼ��������ļ���Ҫ�Լ��ֶ����
`����`
```
> mongod --config E:\MongoDB\etc\mongodb.conf
// ���к� �������в��������룬��־�Ѿ����뵽��־�ļ���
// ctrl + c �رշ�����
```
**�����ļ��ο�** [�����ĵ�](http://docs.mongodb.org/manual/reference/configuration-options/)
```
#�ϸ����YAML�﷨������  �����ĵ�http://docs.mongodb.org/manual/reference/configuration-options/
#��־����ļ�·��
systemLog:
destination: file
path: E:\MongoDB\data\log\mongod.log  //���������ţ�
logAppend: true

#���ݿ�
storage:
dbPath: E:\MongoDB\data\db
```
#### 3���������޸�Ĭ�����ã����� `Ҳ�Ƽ�`
`����`
```
> mongod --dbpath "E:\MongoDB\data\db"
```

#### 4�����ó�window���� `Ҳ�Ƽ�`
����ĺô��������Զ�������ɶ���
�漰cmd����  sc
**��������**
`����`
```
//����һ ����ָ������ install
mongod --config "E:\MongoDB\etc\mongod.cfg" --install

//������  ����ԭ������sc
sc create MongoDB binPath= "E:\MongoDB\Server3.0\bin\mongod.exe --service --config=E:\MongoDB\etc\mongod.cfg"

//ԭ��������������رշ���  ��Ҳ���ֶ�
net start MongoDB
net stop MongoDB
```
**ɾ��windowָ������**
`����`
```
//����һ
mongod --remove
//������ ԭ��
sc delete MongoDB  // �������Լ��Ȳ鿴�£����������������

```


##mongodb ԭ��ʹ��
@(my_mongoDB)[mongoDBԭ��ʹ��]
> �ٷ��ṩ��һ�������й��� mongo `����mongod`
> mongo��һ��`javascript shell`, ��������Js
> mongo�ͻ����Զ����ӵ�������������test���ݿ�

#### �洢�ڻ�ȡ
> mongoDB �д�����ݿⶼ���Ա�׼json��ʽ `key/value ��Ҫ��˫���ţ�`��ԭʼֵ`������Ҳ��json
> mongo �� js������룬 `js���� ���ϸ�json`������key��Ҳ����˫����
####�������л����ݿ�
- db ȫ�ֱ�����ָ��ǰ�����ݿ�
```
> db
test  //��ǰָ������ݿ�
> use bae
switch to db bae  //������һ�����ݿ�bae
```
#### insert
```
// ��������mongo �������м���  ,title��helloд���ˣ�����ʹ���
> post = {"titel" : "helo world",
... "content" : "�ҵĵ�һƪ���ģ�hello mongodb",
... "data" : new Date()}
{
"titel" : "helo world",
"content" : "�ҵĵ�һƪ���ģ�hello mongodb",
"data" : ISODate("2015-07-12T09:09:10.154Z")
}

> db.blog.insert(post)
WriteResult({ "nInserted" : 1 }) //�ɹ�����
```
####find
```
> db.blog.find()
// ����Ҹղ������Ϣ
{ "_id" : ObjectId("55a22f1a139c555a20e7d38a"), "titel" : "helo world", "content" : "�ҵĵ�һƪ���ģ�hello mongodb", "data" : ISODate("2015-07-12T09:09:10.154Z") }
```
####update
> ���ٽ�������������һ��ƥ����������һ�����º�Ķ���
```
> post.commet = [] ;  // mongo ������һ�ּ�¼���������
> db.blog.update({titel: "helo world"}, post)
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
// ����ʾ ƥ����������޸ĵ�����
```
####remove
> ��û�в���ʱ��ɾ������������
> ����ƥ����������ɾ��������¼
```
> db.blog.remove({titel : "helo world"})
// WriteResult({ "nRemoved" : 1 })
```