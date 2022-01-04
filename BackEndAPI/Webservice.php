<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Webservice extends Public_Controller {
 
    public function __construct()
    {        

        header('Content-type: application/json');
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET");
        header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
        
         parent::__construct();
         $this->load->model('ScoreModel');
         
          
    }


   public function postScore()
    {
        try{
             $_POST = json_decode(file_get_contents("php://input"),true);
       
         if(!empty($_POST['name']) && !empty($_POST['foodItem'])){
            
             $data['item'] = isset($_POST['foodItem']) ? $_POST['foodItem'] :''; 
              $data['name'] = isset($_POST['name']) ? $_POST['name'] :''; 
              $data['itemid'] = isset($_POST['selectedItem']) ? $_POST['selectedItem'] :''; 
              $insertedId = $this->ScoreModel->insert($data);
           
              $insert_data["id"] = $insertedId;
              $response = array(
                        'status' => true,
                        'stausCode' => 200,
                        'msg' => "Score Added successfully",
                        'data' => $insert_data
                    );  
           }
           
         sendResponse($response);
         }catch(Exception $e){
            var_dump($e);
        }
    }

  public function getScore()
    {
        try{
           
            $allrecentproducts = $this->ScoreModel->getData();
            $jsonData = json_encode($allrecentproducts);
            $response = array(
                'status' =>  true,
                'stausCode' => 200,
                'msg' => "Service Fetched successfully",
                'data' => $jsonData
            );
          log_message('info', 'getScore API => response :'.json_encode($response) ); 
            sendResponse($jsonData);           
        }catch(Exception $e){
            var_dump($e);
        }
    }
    
  public function getdaily()
    {
        try{
           
            $allrecentproducts = $this->ScoreModel->getToday();
            $jsonData = json_encode($allrecentproducts);
            $response = array(
                'status' =>  true,
                'stausCode' => 200,
                'msg' => "Service Fetched successfully",
                'data' => $jsonData
            );
          log_message('info', 'getScore API => response :'.json_encode($response) ); 
            sendResponse($jsonData);           
        }catch(Exception $e){
            var_dump($e);
        }
    }


  public function getMonthlyscore()
    {
        try{
           
            $allrecentproducts = $this->ScoreModel->getMonthly();
            $jsonData = json_encode($allrecentproducts);
            $response = array(
                'status' =>  true,
                'stausCode' => 200,
                'msg' => "Service Fetched successfully",
                'data' => $jsonData
            );
          log_message('info', 'getScore API => response :'.json_encode($response) ); 
            sendResponse($jsonData);           
        }catch(Exception $e){
            var_dump($e);
        }
    }





}



