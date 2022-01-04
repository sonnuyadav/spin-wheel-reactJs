<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class ScoreModel extends CI_Model {

    public function __construct()
    {
        parent::__construct();
        $this->table = 'tbl_score';        
    }
    public function insert($data){
        $insertid = $this->db->insert($this->table,$data);
         return $this->db->insert_id();
    } 
 
    public function get_row($id){
       $this->db->where('id='.$id);
         return $this->db->get($this->table)->row();
    } 
    public function getData($flag){
         $this->db->order_by("doe","DESC");
        return $this->db->get($this->table)->result();
    } 
    
    public function getToday(){
      $date   =   date('Y-m-d');
      $this->db->where('DATE(doe)',$date);
    $this->db->order_by("doe","DESC");
      return $this->db->get($this->table)->result();
    }
      public function getMonthly(){
      $date   =   date('Y-m-d');
      $this->db->where('MONTH(doe)', date('m')); //For current month
      $this->db->order_by("doe","DESC");
      return $this->db->get($this->table)->result();
    }
  
}