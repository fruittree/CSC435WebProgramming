function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
alert(reverse_a_number(32243));