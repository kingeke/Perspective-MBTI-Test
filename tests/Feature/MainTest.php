<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MainTest extends TestCase
{
    use RefreshDatabase;

    /**
     * To test the api is live
     * @test
     */
    public function api_is_live()
    {
        $response = $this->get('/api');

        $response->assertStatus(200);
        $response->assertJson([
            'status' => 'OK',
            'version' => '1.0'
        ]);
    }

    /**
     * To test the user can submit form and get mbti
     * @test
     */
    public function user_can_submit_form_and_get_mbti_result()
    {
        $response = $this->post('/api/submit-result', $this->validData());

        $response->assertStatus(200);
        $response->assertJson([
            'status' => 'success',
            'mbti' => 'ENTP'
        ]);
    }

    /**
     * To test the email is required when submitting the form
     * @test
     */
    public function email_is_required()
    {
        $response = $this->post('/api/submit-result', array_merge($this->validData(), ['email' => '']));

        $response->assertStatus(422);
        $response->assertJson([
            'status' => 'error',
            'message' => 'The email field is required.'
        ]);
    }

    /**
     * To test the email must be a valid email address
     * @test
     */
    public function email_must_be_valid()
    {
        $response = $this->post('/api/submit-result', array_merge($this->validData(), ['email' => 'test']));

        $response->assertStatus(422);
        $response->assertJson([
            'status' => 'error',
            'message' => 'The email must be a valid email address.'
        ]);
    }

    /**
     * To test the response is required when submitting the form
     * @test
     */
    public function response_is_required()
    {
        $response = $this->post('/api/submit-result', array_merge($this->validData(), ['response' => '']));

        $response->assertStatus(422);
        $response->assertJson([
            'status' => 'error',
            'message' => 'The response field is required.'
        ]);
    }

    private function validData()
    {
        return [
            'email' => 'chinonsoeke@gmail.com',
            'response' => [
                [
                    'question' => 'You find it takes effort to introduce yourself to other people.',
                    'dimension' => 'EI',
                    'rank' => '4',
                    'score' => 'E'
                ],
                [
                    'question' => 'You consider yourself more practical than creative.',
                    'dimension' => 'SN',
                    'rank' => '3',
                    'score' => 'N'
                ],
                [
                    'question' => 'Winning a debate matters less to you than making sure no one gets upset.',
                    'dimension' => 'TF',
                    'rank' => '1',
                    'score' => 'T'
                ],
                [
                    'question' => 'You get energized going to social events that involve many interactions.',
                    'dimension' => 'EI',
                    'rank' => '6',
                    'score' => 'E'
                ],
                [
                    'question' => 'You often spend time exploring unrealistic and impractical yet intriguing ideas.',
                    'dimension' => 'SN',
                    'rank' => '7',
                    'score' => 'N'
                ],
                [
                    'question' => 'Deadlines seem to you to be of relative rather than absolute importance.',
                    'dimension' => 'JP',
                    'rank' => '3',
                    'score' => 'J'
                ],
                [
                    'question' => 'Logic is usually more important than heart when it comes to making important decisions.',
                    'dimension' => 'TF',
                    'rank' => '5',
                    'score' => 'T'
                ],
                [
                    'question' => 'Your home and work environments are quite tidy.',
                    'dimension' => 'JP',
                    'rank' => '3',
                    'score' => 'P'
                ],
                [
                    'question' => 'You do not mind being at the center of attention.',
                    'dimension' => 'EI',
                    'rank' => '6',
                    'score' => 'E'
                ],
                [
                    'question' => 'Keeping your options open is more important than having a to-do list.',
                    'dimension' => 'JP',
                    'rank' => '6',
                    'score' => 'P'
                ],
            ]
        ];
    }
}
