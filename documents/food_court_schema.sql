CREATE TYPE status as ENUM('Coming soon', 'Temporary Closed', 'Permanently Closed', 'Active', 'Inactive' );
CREATE TABLE stalls (
	id UUID primary key,
	stall_name varchar(255) not null,
	stall_type varchar(100) not null,
	status status  default 'Active' not null,
	display_order int unique,
	stall_image text,
	contact_name varchar(255),
	stall_area varchar(100),
	open_at time,
	close_at time,
	stall_number varchar(50) unique,
	discount int,
	is_deleted bool default 'False',
	created_at Timestamp default current_timestamp,
	updated_at Timestamp default now()
)


create table menu (
	id uuid primary key,
	stall_id uuid references stalls (id),
	name varchar(255),
	price numeric(10,2),
	item_image text,
	serving_quantity float,
	serving_quantity_units varchar(10),
	is_available bool default 'True',
	description text,
	discount int,
	is_deleted bool default 'False',
	created_at timestamp default current_timestamp,
	updated_at timestamp default now()
)


-- create type order_status as ENUM ('Order Placed', 'Preparing', 'Delay', 'Delivered');
-- create type pay_status as ENUM ('Processing', 'Success', 'Failed');

create type order_status as ENUM ('PLACED', 'PREPARING', 'READY', 'COMPLETED', 'CANCELLED'); 
create type pay_status as ENUM ('PENDING', 'SUCCESS', 'FAILED');
create table orders(
	id uuid primary key,
	table_number int not null,
	stall_id uuid references stalls(id),
	order_status order_status not null,
	estimated_time int,
	total_payment numeric(10,2) not null,
	payment_status pay_status not null,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
)


create table if not exists order_items(
	id uuid primary key,
	order_id uuid references orders(id),
	item_id uuid references menu(id),
	quantity int not null,
	proce_at_order_time numeric(10,2),
	created_at timestamp without time zone  default current_timestamp,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


create type pay_mode_enum as ENUM('UPI','CASH','CARD','WALLET','NET_BANKING');
create table if not exists payments(
	 id uuid primary key,
	 order_id uuid references orders(id),
	 payment_mode pay_mode_enum not null,
	 amount_paid numeric(10,2) not null,
	 tax_paid numeric(10,2) not null,
	 transection_id UUID unique default null,
	 payment_status pay_status not null,
	 invoice_number uuid unique,
	 invoice_date Date,
	 created_at timestamp without time zone default current_timestamp,
	 updated_at timestamp default now()
)



-- USERS -- 

Create type user_roles as Enum('USER', 'MANAGER', 'ADMIN');
CREATE TABLE users(
	id UUID primary key,
	email varchar(255),
	password_hash text,
	user_role user_roles,
	created_at timestamp default CURRENT_TIMESTAMP
)
