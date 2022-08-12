<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

$config['index_page'] = '';
$config['site_license_key'] = '';
// ExpressionEngine Config Items
// Find more configs and overrides at
// https://docs.expressionengine.com/latest/general/system-configuration-overrides.html

$config['app_version'] = '6.2.6';
$config['encryption_key'] = '694e3c7ccbad01f9227ef7f4aa372bdf995016c1';
$config['session_crypt_key'] = '7b54b889ef250ec8103d91ad7e7080d5c71a9c34';
$config['database'] = array(
	'expressionengine' => array(
		'hostname' => 'localhost',
		'database' => 'ee_mner',
		'username' => 'root',
		'password' => '',
		'dbprefix' => 'exp_',
		'char_set' => 'utf8mb4',
		'dbcollat' => 'utf8mb4_unicode_ci',
		'port'     => ''
	),
);
$config['show_ee_news'] = 'y';

// EOF