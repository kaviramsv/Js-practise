# p "hi"
# print "heloo"
# puts "hi"
# 20.times { p rand(10) }
# 1.times { p "-------" }
# puts "hello".to_i
# puts "please enter your name"

# def multiply(one, two)
#   one.to_f * two.to_f
# end

# def divide(first_number, second_number)
#   first_number.to_f / second_number.to_f
# end

# def subtract(first_number, second_number)
#   second_number.to_f - first_number.to_f
# end

# def mod(first_number, second_number)
#   first_number.to_f % second_number.to_f
# end
# ans = "yes"
# while ans == "yes"
# puts "What do you want to do? 1) multiply 2) divide 3) subtract 4) find remainder"
# prompt = gets.chomp
# puts "Enter in your first number"
# first_number = gets.chomp
# puts "Enter in your second number"
# second_number = gets.chomp

#   if prompt == "1"
#     puts "You have chosen to multiply #{first_number} with #{second_number}"
#     result = multiply(first_number, second_number)
#   elsif prompt == "2"
#     puts "You have chosen to divide"
#     result = divide(first_number, second_number)
#   elsif prompt == "3"
#     puts "You have chosen to subtract"
#     result = subtract(first_number, second_number)
#   elsif prompt == "4"
#     puts "You have chosen to find the remainder"
#     result = mod(first_number, second_number)
#   else
#     puts "You have made an invalid choice"
#   end
#   puts result
#   puts "u wish to continue"
#   ans = gets.chomp
# end
x=1..100  
x.class 
# gives Range
x.to_a
# =>[1,2,3....100]
x=(1..10).to_a
y = ("a".."z")
puts y.to_a.shuffle
x<<10
puts x.last
