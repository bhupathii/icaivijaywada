-- ----------------------------------------------------
-- Supabase Schema for ICAI Vijayawada Portal
-- Execute this SQL script in your Supabase SQL Editor.
-- ----------------------------------------------------

-- Drop tables if they exist
drop table if exists queries;
drop table if exists newsletters;
drop table if exists seminars;
drop table if exists announcements;

-- 1. Table: Announcements
create table announcements (
  id uuid default gen_random_uuid() primary key,
  date date default current_date not null,
  title text not null,
  link text,
  is_new boolean default true not null
);

-- 2. Table: Seminars
create table seminars (
  id uuid default gen_random_uuid() primary key,
  date date not null,
  time text not null,
  topic text not null,
  speaker text not null,
  hours integer not null,
  fee text not null
);

-- 3. Table: Newsletters
create table newsletters (
  id uuid default gen_random_uuid() primary key,
  month text not null,
  title text not null,
  pdf_url text not null
);

-- 4. Table: Queries / Grievances
create table queries (
  id uuid default gen_random_uuid() primary key,
  ticket_no text not null,
  name text not null,
  email text not null,
  membership_no text,
  category text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ----------------------------------------------------
-- Row Level Security (RLS) Configuration
-- ----------------------------------------------------

-- Enable RLS on all tables
alter table announcements enable row level security;
alter table seminars enable row level security;
alter table newsletters enable row level security;
alter table queries enable row level security;

-- 1. Policies: Announcements
create policy "Allow public read announcements" on announcements 
  for select to anon, authenticated using (true);

create policy "Allow authenticated admin full write announcements" on announcements 
  for all to authenticated using (true) with check (true);

-- 2. Policies: Seminars
create policy "Allow public read seminars" on seminars 
  for select to anon, authenticated using (true);

create policy "Allow authenticated admin full write seminars" on seminars 
  for all to authenticated using (true) with check (true);

-- 3. Policies: Newsletters
create policy "Allow public read newsletters" on newsletters 
  for select to anon, authenticated using (true);

create policy "Allow authenticated admin full write newsletters" on newsletters 
  for all to authenticated using (true) with check (true);

-- 4. Policies: Queries (Contact submissions)
create policy "Allow public to submit queries" on queries 
  for insert to anon, authenticated with check (true);

create policy "Allow authenticated admin to manage queries" on queries 
  for all to authenticated using (true) with check (true);

-- ----------------------------------------------------
-- Seed Initial Data
-- ----------------------------------------------------

insert into announcements (title, link, is_new) values 
('Seminar on GST Audit Reconciliation and Annual Return Filing (GSTR-9 & 9C) on June 25th.', 'members.html#seminars', true),
('Admissions open for intermediate and final coaching classes starting August 1st.', 'students.html#coaching', false),
('Vijayawada Branch Managing Committee for the term 2025-2028 announced.', 'about.html#committee', false),
('Monthly newsletter for June 2026 is now available for download.', 'members.html#newsletters', true);

insert into seminars (date, time, topic, speaker, hours, fee) values
('2026-06-25', '09:30 AM - 05:30 PM', 'One-Day Seminar on AI & Automation in Audit', 'CA. Sriram Raghavan (Chennai)', 6, '₹ 500/- + GST'),
('2026-07-02', '02:00 PM - 05:30 PM', 'Half-Day Seminar on Recent Changes in GST Law & GSTR-9/9C filing', 'CA. Madhavan Swamy (Hyderabad)', 3, '₹ 300/- + GST'),
('2026-07-10', '09:30 AM - 05:30 PM', 'National Level Seminar on Union Budget 2026 Direct Taxes', 'CA. K. Chidambaram (New Delhi)', 6, '₹ 600/- + GST'),
('2026-07-18', '05:30 PM - 08:30 PM', 'Study Circle Meeting on Valuation under Companies Act 2013', 'CA. P. Subhash (Vijayawada)', 2, 'Free for CAB Members');

insert into newsletters (month, title, pdf_url) values
('June 2026', 'Vol. 53, Issue 6 | Union Budget Preview & CPE schedules', '#'),
('May 2026', 'Vol. 53, Issue 5 | Library structural improvements & SICASA updates', '#'),
('April 2026', 'Vol. 53, Issue 4 | Annual Branch Audit review & MCA Portal updates', '#'),
('March 2026', 'Vol. 53, Issue 3 | Bank Branch Audit guidance notes & seminars', '#');
