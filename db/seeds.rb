User.delete_all
Rant.delete_all

admin = User.create!(
first_name: "Admin",
last_name: "Admin",
email: "admin@example.com",
password: "password"
)

5.times do |i|
Rant.create!(
  title: Faker::Lorem.words(4),
  body: Faker::Lorem.paragraph,
  user_id: admin.id
)
end

30.times do |i|
  User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: Faker::Internet.email,
  password: Faker::Lorem.word
  )


end
