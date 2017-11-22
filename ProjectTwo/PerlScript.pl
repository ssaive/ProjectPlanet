#!/usr/bin/perl

use 5.010;

use DBI;

my $driver = "SQLite";
my $database = "C:/sqlite/SQLiteStudio/MyDatabase.db"; #path to my database
my $dsn      = "DBI:$driver:dbname=$database";
my $userid   = "";
my $password = "";
my $dbh = DBI->connect($dsn, $userid, $password, { RaiseError  => 1}) 
    or die "Cannot connect"; #connecting
#print "$dbh";  checked the hash of dbh
#print " \nOpened database successfully   \n ";
my $stmt = "select * from MyTable";
my $res = $dbh->selectall_arrayref($stmt)
	or die "Couldn't load table"; #storing the array hash into res
#print "$res\n"; checked the hash of res
print "FIRST NAME	LAST NAME	HOME \n " ;
foreach my $myRow(@$res)
{
   
   foreach my $myElem(@$myRow)
    {
        print "$myElem";
        print "\t\t";
    }
    print "\n";
}

$dbh->disconnect();
