/***************************************************
	학적과 수강신청 실습 데이터베이스
***************************************************/
-- 데이터베이스 생성
create database if not exists `enroll2026`;
show databases;
use enroll2026;
select database();

create table instructor(
	instructor_no 		int				auto_increment		primary key,
    instructor_name 	varchar(10),
    age					int,
    gender				char(2)
);
select * from instructor;
create table subject(
	subject_no			int				auto_increment		primary key,
    subject_name		varchar(30),		
    class_room			varchar(30),
    instructor_no		int,
    constraint fk_subject_instructor_no foreign key(instructor_no)
    references instructor(instructor_no)
);	
select * from subject;
create table class_time(
	time_id		int			auto_increment		primary key,
    subject_no	int,
    class_time	varchar(20),
    constraint fk_subject_no_class_time foreign key(subject_no)
    references subject(subject_no)
);
select * from class_time;
create table student(
	student_id		int				auto_increment		primary key,
    student_name	varchar(20),
    address			varchar(30)
);
select * from student;
create table enrollment(
	student_id		int,
    subject_no		int,
    grade			char(10),
    constraint fk_student_id_enrollment foreign key(student_id)
    references student(student_id),
	constraint fk_subject_no_enrollment foreign key(subject_no)
    references subject(subject_no)
);
select * from enrollment;


insert into instructor(instructor_name, age, gender)
	values('홍길동', 30, 'M');
insert into instructor(instructor_name, age, gender)
	values('홍길순', 30, 'F');
insert into instructor(instructor_name, age, gender)
	values('이순신', 35, 'M');
insert into instructor(instructor_name, age, gender)
	values('신사임당', 45, 'F');
insert into instructor(instructor_name, age, gender)
	values('강감찬', 40, 'M');

insert into student(student_name, address)
	values('유비', '서울시 강남구'); 
insert into student(student_name, address)
	values('관우', '서울시 강북구');   
insert into student(student_name, address)
	values('장비', '경기도 수원시');   
insert into student(student_name, address)
	values('조조', '서울시 동작구');   
insert into student(student_name, address)
	values('제갈량', '경기도 화성시');   

insert into subject(subject_name, class_room, instructor_no)
	values('국어', 'a반', 1);   
insert into subject(subject_name, class_room, instructor_no)
	values('수학', 'b반', 2);   
insert into subject(subject_name, class_room, instructor_no)
	values('사회', 'c반', 3);   
insert into subject(subject_name, class_room, instructor_no)
	values('과학', 'd반', 4);   
insert into subject(subject_name, class_room, instructor_no)
	values('영어', 'e반', 5);   
    
insert into class_time(subject_no, class_time)
	values(1, '1교시');
insert into class_time(subject_no, class_time)
	values(2, '2교시');
insert into class_time(subject_no, class_time)
	values(3, '3교시');
insert into class_time(subject_no, class_time)
	values(4, '4교시');
insert into class_time(subject_no, class_time)
	values(5, '5교시');
    
insert into enrollment(student_id, subject_no, grade)
	values(1, 1, '3학점');
insert into enrollment(student_id, subject_no, grade)
	values(2, 2, '3학점');
insert into enrollment(student_id, subject_no, grade)
	values(3, 3, '2학점');
insert into enrollment(student_id, subject_no, grade)
	values(4, 4, '1학점');
insert into enrollment(student_id, subject_no, grade)
	values(5, 5, '2학점');
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    















